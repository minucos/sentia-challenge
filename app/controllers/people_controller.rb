class PeopleController < ApplicationController
  def index
    @people = Person.all.includes(:locations, :affiliations)
  end

  def upload
    @people = Person.create_from_csv_file(params[:file])
    if @people
      render :index
    else
      render json: "Something went wrong", status: 422
    end
  end

  def destroy_all
    Person.destroy_all
    render :index
  end
end
