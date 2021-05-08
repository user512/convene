Rails.application.config.middleware.use OmniAuth::Builder do
  provider :developer
  provider :onetime
end

OmniAuth.config.logger = Rails.logger