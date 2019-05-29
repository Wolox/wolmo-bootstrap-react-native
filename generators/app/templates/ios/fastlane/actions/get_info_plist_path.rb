module Fastlane
  module Actions
    class GetInfoPlistPathAction < Action

      # Given an environment
      # this script returns the Info.plist file path associated to it.

      INFO_PLIST_KEY = "INFOPLIST_FILE".freeze

      def self.run(params)
        project_name = Actions::ProjectNameAction.project_filename
        scheme_name = Actions::GetSchemeAction.run(params)
        build_configuration_name = Actions::GetBuildConfigurationAction.run(params)

        project = Xcodeproj::Project.open(project_name)
        scheme = project.native_targets.detect { |target| target.name == scheme_name }
        build_configuration = scheme.build_configurations.detect { |config| config.name == build_configuration_name }
        plist_path = build_configuration.build_settings[INFO_PLIST_KEY]
        return plist_path
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol)
        ]
      end

    end
  end
end
