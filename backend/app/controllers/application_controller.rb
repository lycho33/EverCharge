class ApplicationController < ActionController::API
    before_action :authorized

    # takes a payload and signs a token using a secret key -- ENV
    def encode_token(payload)
        JWT.encode(payload, 'yourSecret')
    end

    #determines if someone is logged in 
    def auth_header
        # { Authorization: 'Bearer <token>' }
        request.headers['Authorization']
    end

    #if auth header is present, parse the string for the token, verify it, pull out hte payload
    def decoded_token
        if auth_header
        token = auth_header.split(' ')[1]
        # header: { 'Authorization': 'Bearer <token>' }
        begin
            JWT.decode(token, 'yourSecret', true, algorithm: 'HS256')
        rescue JWT::DecodeError
            nil
        end
        end
    end

    #decode the token, grab the username from lthe payload, search the user in the database
    def logged_in_user
        if decoded_token
        user_id = decoded_token[0]['user_id']
        @user = User.find_by(id: user_id)
        end
    end

    #returns true if logged in
    def logged_in?
        !!logged_in_user
    end

    def authorized
        render json: { message: 'Please log in' }, status: :unauthorized unless logged_in?
    end
end
