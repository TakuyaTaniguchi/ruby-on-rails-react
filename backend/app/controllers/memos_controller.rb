class MemosController < ApplicationController
  before_action :authenticate_user!
  before_action :set_user
  before_action :set_memo, only: [:show, :destroy, :update]

  def index
    @memos = @user.memos
    render json: @memos
  end

  def show
    render json: @memo
  end

  def create
    @memo = @user.memos.build(memo_params)
    if @memo.save
      render json: @memo, status: :created
    else
      render json: @memo.errors, status: :unprocessable_entity
    end
  end

  def update
    @memo.update(memo_params)
    render json: @memo
  end

  def destroy
    @memo.destroy
    head :no_content
  end

  private

    def set_user
      @user = current_user
    end
    # def set_user
    #   @user = User.find(params[:user_id])
    # rescue ActiveRecord::RecordNotFound
    #   render json: { error: 'User not found' }, status: :not_found
    # end

    def memo_params
      params.require(:memo).permit(:title, :content)
    end

    def set_memo
      @memo = @user.memos.find(params[:id])
    end
end
