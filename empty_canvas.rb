require 'sinatra'
require 'forgery'
require_relative './lib/helpers'

set :haml, :format => :html5

get '/' do
  erb_or_haml :index
end

get '/:view' do
  erb_or_haml :"#{params[:view]}"
end

helpers EmptyCanvas::Helpers
