class SessionsController < ::DeviseTokenAuth::SessionsController

  # override this method to customise how the resource is rendered.
  def render_create_success
    render json: { data: SessionsSerializer.new(@resource).as_json }
  end
end