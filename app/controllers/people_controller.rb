class PeopleController < ApplicationController
  def index
    page = params[:page] || 1
    @people = Person.all

    if params[:filter]
      @people = Person.search_by_filter(@people, params[:filter])
    end
    
    if params[:sort]
      @people = Person.sort_by_field(@people, params[:sort])
    end
    @count = @people.length
    @people = @people
      .page(page).per(10)
      .includes(:locations, :affiliations)
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
