class RecordsController < ApplicationController
  def index
    @records = Record.all
    render json: @records
  end

  def search
    @results = Record.searchByParty(params[:party]).searchByCand(params[:candidate])
    render json: @results
  end
end
