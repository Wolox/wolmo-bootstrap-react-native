module Fastlane
  module Actions
    class GetConfigFilePathAction < Action

      # Given an environment
      # this script returns the .xcconfig file path associated to it.

      def self.run(params)
        project_name = Actions::ProjectNameAction.project_filename

        project = Xcodeproj::Project.open(project_name)
        build_configuration_name = params[:build_configuration]
        build_configuration = project.build_configurations.detect { |config| config.name == build_configuration_name }
        xcconfig_path = build_configuration.base_configuration_reference.path
        return xcconfig_path
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :build_configuration, optional: false, type: String)
        ]
      end

    end
  end
end
