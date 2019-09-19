// pages/product-detail/product-detail.js
Page({

  /**
   * Page initial data
   */
  data: {
    current: 'tab1',
    offers: [{
      country: 'Abu Dhabi',
      location: "Al riadh ksahe",
      desc: "lorem corumb ale lo rem corum bale lorem corum",
      price: "120",
      review: "4.5",
      imgURL: "/assets/dubai.jpg"
    }, {
      country: 'Thailand',
      location: "bankook city",
      desc: "lorem corumb ale lo rem corum bale lorem corum",
      price: "37",
      imgURL: "/assets/bali.jpg",
      review: "3.5"
    }, {
      country: 'Tunisia',
      location: "tunis, babouika",
      desc: "lorem corumb ale lo rem corum bale lorem corum",
      price: "98.7",
      imgURL: "/assets/thailand.jpg",
      review: "5"
    }]
  },

  handleChange({ detail }) {
    this.setData({
      current: detail.key
    });
  },

  /**
   * Lifecycle function--Called when page load
   */
  onLoad: function (options) {

  },

  /**
   * Lifecycle function--Called when page is initially rendered
   */
  onReady: function () {

  },

  /**
   * Lifecycle function--Called when page show
   */
  onShow: function () {

  },

  /**
   * Lifecycle function--Called when page hide
   */
  onHide: function () {

  },

  /**
   * Lifecycle function--Called when page unload
   */
  onUnload: function () {

  },

  /**
   * Page event handler function--Called when user drop down
   */
  onPullDownRefresh: function () {

  },

  /**
   * Called when page reach bottom
   */
  onReachBottom: function () {

  },

  /**
   * Called when user click on the top right corner to share
   */
  onShareAppMessage: function () {

  }
})