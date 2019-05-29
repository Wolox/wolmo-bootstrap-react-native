module Fastlane
  module Actions
    class GetBuildConfigurationAction < Action

      # Given an environment
      # this script returns the build configuration associated to it.

      ENV_KEY = "BUILD_CONFIGURATION".freeze

      # Default build configuration by environment
      DEFAULT_BUILD_CONFIGURATIONS = {
        dev: "Debug",
        qa: "QA",
        stage: "Release",
        production: "Production"
      }.freeze

      def self.run(params)
        Actions::GetEnvironmentInfoAction.run(environment: params[:environment])[ENV_KEY] || DEFAULT_BUILD_CONFIGURATIONS[params[:environment]]
      end

      def self.get_all_build_configurations
        build_configs = {
          dev: Actions::GetBuildConfigurationAction.run(environment: :dev),
          qa: Actions::GetBuildConfigurationAction.run(environment: :qa),
          stage: Actions::GetBuildConfigurationAction.run(environment: :stage),
          production: Actions::GetBuildConfigurationAction.run(environment: :production)
        }
        build_configs.select { |env, config_name| !config_name.empty? }
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
