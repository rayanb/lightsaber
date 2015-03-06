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

get '/users' do
  erb :users
end

get '/all_users' do
  content_type :json
  users = User.all[rand(0..30)..rand(60..99)]
  users.to_json
end