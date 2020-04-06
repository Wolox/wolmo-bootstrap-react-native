require 'xcodeproj'
project_name = ARGV[0]
total_path = ARGV[1]
crashlytics = ARGV[2] == 'true'
googleServices = ARGV[3] == 'true'
project_path = total_path + '/' + project_name + '/ios/' + project_name + '.xcodeproj'
project = Xcodeproj::Project.open(project_path)
release_base_config_file = nil
release_build_settings = nil

project.targets.each do |target|
 if target.name != project_name
  target.remove_from_project
 end
end

project.targets.each do |target|
 if target.name != project_name
  target.remove_from_project
 end
end

project.targets.each do |target|
 target.build_configurations.each do |config|
  if(config.name == 'Release')
   release_base_config_file = config.base_configuration_reference
   release_build_settings = config.build_settings
  end
 end
end

project.targets.each do |target|
 target.add_build_configuration('QA', :release)
 target.add_build_configuration('Stage', :release)
 target.add_build_configuration('Production', :release)
 target.build_configurations.each do |config|
  if(config.name == 'Stage' || config.name == 'QA' || config.name == 'Production')
   config.base_configuration_reference=(release_base_config_file)
   config.build_settings=(release_build_settings)
  end
 end
end

project.targets.each do |target|
 target.build_configurations.each do |config|
  if(config.name == 'Release')
   config.remove_from_project
  end
 end
end

project.build_configurations.each do |config|
 if(config.name == 'Release')
  config.remove_from_project
 end
end

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

if crashlytics
 project.targets.each do |target|
  if target.name == project_name
     if  !target.shell_script_build_phases.find { |bp| bp.name == 'Crashlytics' }
        phase=target.new_shell_script_build_phase("Crashlytics")
        phase.shell_script="\"${PODS_ROOT}/Fabric/run\"\n"
     end
  end
 end
end

project.save
