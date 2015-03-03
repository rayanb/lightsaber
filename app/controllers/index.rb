
get '/' do
  erb :index
end

post '/header' do
  message = params[:message]
  content_type :json
  {message: message}.to_json
end

get '/lightsaber' do
  erb :lightsaber, layout: false
end