class AddCommentaryToOffer < ActiveRecord::Migration[5.1]
  def change
    add_column :offers, :commentary, :string
  end
end
