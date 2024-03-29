class UsersController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user, only: %i[ show update destroy me]

  def index
    @users = User.all
    render json: @users
  end

  def show
    # @user = User.includes(:memos).find(params[:id])
    render json: @user.as_json(include: :memos)
  end

  def me
    render json: @user.as_json(include: :memos)
  end



  # def create
  #   @user = User.create(user_params)
  #   render json: @user
  # end

  def update
    # @user = User.find(params[:id])
    @user.update(user_params)
    render json: @user
  end

  def destroy
    # @user = User.find(params[:id])
    @user.destroy
    render json: @user
  end

  private
    def set_user
      @user = current_user
    end

    def user_params
      params.permit(:name, :email, :password)
    end
  end
