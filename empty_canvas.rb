require 'sinatra'
require 'forgery'

set :erb, :layout => :layout

get '/' do
  erb :index
end

get '/:view' do
  erb :"#{params[:view]}"
end

helpers do

  def lorem(*params)
    *params = :sentence if params.empty?

    options = params.last.is_a?(Hash) ? params.pop : {}
    options.merge!(:html => true)

    Forgery(:lorem_ipsum).text(*params, options)
  end

end
