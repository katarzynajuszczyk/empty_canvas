require 'sinatra'

set :erb, :layout => :layout

get '/' do
  erb :index
end

get '/:view' do
  erb :"#{params[:view]}"
end
