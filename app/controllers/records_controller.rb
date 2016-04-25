class RecordsController < ApplicationController
  def index
    @recordss = Record.all
    render json: @records
  end
end
