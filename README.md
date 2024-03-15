# ruby-on-rails-react


## backend

https://railsguides.jp/api_app.html#%E5%9F%BA%E6%9C%AC%E8%A8%AD%E5%AE%9A

```
bundle config set --local path vendor/bundle
```

```
cd backend 
bin/bundle install
bin/rails db:migrate
bin/rails server
```

## frontend
```
cd frontend
yarn install
yarn start
```

※ ポートが衝突する場合は`.env`でポートを変更してください