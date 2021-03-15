class PeopleController < ApplicationController
  def index
    page = params[:page] || 1
    @people = Person.all.page(page).per(10).includes(:locations, :affiliations)
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
