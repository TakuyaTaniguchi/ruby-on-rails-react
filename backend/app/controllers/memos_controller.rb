class MemosController < ApplicationController
  before_action :set_user

  def index
    @memos = @user.memos
  end

  def show
    render json: @memo
  end

  def create
    @memo = @user.memos.create(memo_params)
    if @memo.save
      render json: @memo, status: :created, location: @memo
    else
      render json: @memo.errors, status: :unprocessable_entity
    end
  end

  private
    def set_user
      @user = User.find(params[:user_id])
    end

    def memo_params
      params.require(:memo).permit(:title, :content, :user_id)
    end
end
