require 'sinatra'

get '/' do
  @message= "Rayan is my name"
  erb :index
end

get '/profile' do
  erb :profile
end
