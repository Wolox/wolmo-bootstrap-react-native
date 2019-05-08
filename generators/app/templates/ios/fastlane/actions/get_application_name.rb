module Fastlane
  module Actions
    class GetApplicationNameAction < Action

      # Given an environment
      # this script returns the application name associated to it.

      ENV_KEY = "APP_ENV_NAME".freeze
      PARTIAL_ENV_KEY = "APP_NAME".freeze

      # Default App ID names by environment
      DEFAULT_APPLICATION_NAMES = {
        dev: "%s Dev",
        qa: "%s QA",
        stage: "%s Stage",
        production: "%s"
      }.freeze

      def self.run(params)
        info = Actions::GetEnvironmentInfoAction.run(environment: params[:environment])
        project_name = info[PARTIAL_ENV_KEY] || Actions::ProjectNameAction.run({})
        (info[ENV_KEY] || DEFAULT_APPLICATION_NAMES[params[:environment]]) % project_name
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol),
        ]
      end

    end
  end
end
