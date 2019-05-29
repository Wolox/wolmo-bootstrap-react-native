module Fastlane
  module Actions
    class CheckBumpTypeAction < Action

      # Get the type of release desired
      # If there's only one bump_type allowed it will use that one
      # If there isn't a bump_type specified and there are many allowed bump_types, it will ask the user

      # Take care if any of these values needs to be changed. It may break the algoritmh!

      FIRST_BUILD = 0
      FIRST_VERSION = "0.0.0".freeze

      ALL_BUMP_TYPES = %i(build patch minor major).freeze
      ENVIRONMENT_ALLOWED_BUMP_TYPES = {
        dev: [],
        qa: [:build],
        stage: ALL_BUMP_TYPES,
        production: ALL_BUMP_TYPES
      }.freeze

      def self.run(params)
        is_first_deploy = params[:version] == FIRST_VERSION
        allowed_bump_types = ENVIRONMENT_ALLOWED_BUMP_TYPES[params[:environment]]

        # First deploy needs to be done as major.
        # It is enforced in `Fastfile`.
        if is_first_deploy
          return :major
        end

        # If there is only one allowed bump type, no need to ask the user.
        if allowed_bump_types.count == 1
          return allowed_bump_types.first
        end

        # As long as the user chooses a non allowed bump type, ask again until a valid one is provided.
        bump_type = params[:bump_type]
        while not allowed_bump_types.include? bump_type do
          bump_type = UI.input "Choose the `bump_type` representing the type of deploy. It can be any of #{allowed_bump_types.to_s}"
          bump_type = bump_type.to_sym
        end

        bump_type
      end

      # Fastlane Action class required functions.
      def self.is_supported?(platform)
        true
      end

      def self.available_options
        [
          FastlaneCore::ConfigItem.new(key: :environment, optional: false, type: Symbol),
          FastlaneCore::ConfigItem.new(key: :version, optional: false),
          FastlaneCore::ConfigItem.new(key: :bump_type, optional: true, default_value: nil),
        ]
      end

      def self.bump_type_allowed?(build_configuration, bump_type)
        return ENVIRONMENT_ALLOWED_BUMP_TYPES[build_configuration].include? bump_type
      end

    end
  end
end
