require 'sinatra'
require 'forgery'
require_relative './lib/helpers'

set :erb, :layout => :layout

get '/' do
  erb :index
end

get '/:view' do
  erb :"#{params[:view]}"
end

helpers EmptyCanvas::Helpers
