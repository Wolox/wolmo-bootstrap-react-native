require 'xcodeproj'
project_name = ARGV[0]
total_path = ARGV[1]
googleServices = ARGV[2] == 'true'
project_path = total_path + '/' + project_name + '/ios/' + project_name + '.xcodeproj'
project = Xcodeproj::Project.open(project_path)
release_base_config_file = nil
release_build_settings = nil

# Delete unused targets
def delete_targets_from_project(project, project_name)
 project.targets.each do |target|
  if target.name != project_name
   target_atts_obj = project.root_object.attributes['TargetAttributes']
   target_atts_obj.delete(target.uuid)
   target.remove_from_project
  end
 end
end

delete_targets_from_project(project, project_name)
delete_targets_from_project(project, project_name)

project.targets.each do |target|
 if target.name == project_name
  target.build_configurations.each do |config|
   # Copy Release Build Configuration for Target
   if (config.name == 'Release')
    release_base_config_file = config.base_configuration_reference
    release_build_settings = config.build_settings
    # Delete Release Build Configuration from Target
    config.remove_from_project
   end
  end
  # Add new Build Configurations to Target
  target.add_build_configuration('QA', :release)
  target.add_build_configuration('Stage', :release)
  target.add_build_configuration('Production', :release)
  target.build_configurations.each do |config|
   # Copy Release Build Configuration to new configs
   if (config.name == 'Stage' || config.name == 'QA' || config.name == 'Production')
      config.base_configuration_reference=(release_base_config_file)
      config.build_settings=(release_build_settings)
   end
  end
 end
end

project.build_configurations.each do |config|
 # Copy Release Build Configuration for Project
 if (config.name == 'Release')
  release_base_config_file = config.base_configuration_reference
  release_build_settings = config.build_settings
  # Delete Release Build Configuration from Project
  config.remove_from_project
 end
end
# Add new Build Configurations to Project
project.add_build_configuration('QA', :release)
project.add_build_configuration('Stage', :release)
project.add_build_configuration('Production', :release)
project.build_configurations.each do |config|
 # Copy Release Build Configuration to new configs
 if (config.name == 'Stage' || config.name == 'QA' || config.name == 'Production')
  config.base_configuration_reference=(release_base_config_file)
  config.build_settings=(release_build_settings)
 end
end

# Google Services Script
if googleServices
   project.targets.each do |target|
    if target.name == project_name
       if  !target.shell_script_build_phases.find { |bp| bp.name == 'Google Services Script' }
          phase = target.new_shell_script_build_phase("Google Services Script")
          phase.shell_script = "\"$SRCROOT/../firebaseFilesScript.sh\" \"${PRODUCT_BUNDLE_IDENTIFIER}\" \"ios\"\ncp $SRCROOT/GoogleService-Info.plist $\{BUILT_PRODUCTS_DIR}/$\{PRODUCT_NAME}.app/GoogleService-Info.plist"
       end
    end
   end
end

project.save
