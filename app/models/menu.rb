class Menu < ApplicationRecord
  validates :name, exclusion: { in: [nil, ""] }
end
