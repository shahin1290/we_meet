class RegistrationsController < ::DeviseTokenAuth::RegistrationsController

  # override this method to customise how the resource is rendered.
  def render_create_success
    render json: { data: Users::ShowSerializer.new(@resource).as_json }
  end
end