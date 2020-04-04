require 'xcodeproj'
project_name = ARGV[0]
crashlytics = ARGV[1] == 'true'
project_path = './ios/' + project_name + '.xcodeproj'
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

project.save
