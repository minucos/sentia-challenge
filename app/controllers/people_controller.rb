class PeopleController < ApplicationController
  def index
    @people = Person.all.includes(:locations, :affiliations)
  end

  def upload
    @people = Person.create_from_csv_file(params[:file])
    if completed
      render :index
    else
      render json: "Something went wrong", status: 422
    end
  end
end
