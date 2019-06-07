require 'xcodeproj'

module Fastlane
  module Actions
    class ReadProjectPropertyAction < Action

      SCHEME_ENV_KEY = "SCHEME".freeze

      # Given an environment and a build setting
      # this script returns the corresponding value for the
      # provided build setting.

      def self.run(params)
        environment = params[:environment]
        project_name = Actions::ProjectNameAction.project_filename
        build_configuration_name = Actions::GetBuildConfigurationAction.run(environment: environment)
        scheme = Actions::GetSchemeAction.run(environment: environment)

        project = Xcodeproj::Project.open(project_name)
        build_configuration = project
          .targets.find { |each| each.name == scheme }
          .build_configurations.find { |each| each.name == build_configuration_name }

        if build_configuration.nil?
          UI.abort_with_message! "Build configuration '#{build_configuration_name}' for scheme '#{scheme}' (environment: '#{environment}') is not configured."
        end

        build_configuration.build_settings[params[:build_setting]]
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol),
          FastlaneCore::ConfigItem.new(key: :build_setting, optional: false)
        ]
      end

    end
  end
end
