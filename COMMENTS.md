# Project Notes

# NOTEBOOK

## Problem Solving Approach

1. hosting on github pages: github pages would'nt allow client routing, hence I used `HashRouter` the old school that adds `#` for this time. Never the less, you can have N pages for N repos on github pages, for example:

- https://msqaddura.github.io/
- https://msqaddura.github.io/fifteen-puzzle

2. huge number of movies: of course we can use pagination, but given the large number, the user wont be patient enough to paginate, hence I used infinite scroller. the user keeps scrolling for as long as he wants without compromizing the performance because the unseen elements are deleted seeminglessly

3. what happens to state management?: we do state management, but for example if the user is searching by title, then the best place to store that state is in the query params of the url. this is a native way of doing it, the user can even share the link ;)

4. filter by genre :( : this would behave the same way as the title, a drop down that will change the query params, hence i skipped it.

## Caveats

1. it is possible to make the app more MUI, but i was experminting with it and defnietly the opportunities are endless

2. backend is deployed on a free Railway container, however, you can always run locally!

##Further improvment

1. add series
2. make a huge list of filters
3. add fallback image
4. make icon for the project
5. react native
6. use https://github.com/webtorrent/webtorrent + different movie API to play torrents, then go to jail for it:D
