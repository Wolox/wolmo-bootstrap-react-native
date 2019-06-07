require 'dotenv'

module Fastlane
  module Actions
    class GetEnvironmentInfoAction < Action

      # Given an environment
      # this script returns the hash with all env variables for that environment.

      # File with env variables by environment
      ENVIRONMENTS_FILES = {
        dev: File.dirname(__FILE__) + "/../config/dev.env",
        qa: File.dirname(__FILE__) + "/../config/qa.env",
        stage: File.dirname(__FILE__) + "/../config/stage.env",
        production: File.dirname(__FILE__) + "/../config/production.env"
      }.freeze

      OVERALL_ENVIRONMENT_FILE = (File.dirname(__FILE__) + "/../config/.env").freeze

      def self.run(params)
        # specific file has priority over general file around key collisions
        params[:environment] ? Dotenv.load(OVERALL_ENVIRONMENT_FILE, ENVIRONMENTS_FILES[params[:environment]]) : Dotenv.load(OVERALL_ENVIRONMENT_FILE)
      end

      # Fastlane Action class required functions.

      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: true, type: Symbol)
        ]
      end

    end
  end
end
