class SuggestionsController < ApplicationController  
  respond_to :html
  
  def create
    suggestion = Suggestion.new(params[:suggestion])
    suggestion.save ? flash[:notice] = "Merci pour ta suggestion !" : flash[:notice] = "Tu as du oublier un champ.."
    redirect_to controller: "home", action: "page", page: "wagon_bar"
  end
          
end
