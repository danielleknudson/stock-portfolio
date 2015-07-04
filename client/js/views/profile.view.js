var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
var GraphView = require('./graph.view');
var GraphTrendsModel = require('../models/graph.trends.model');
var FormView = require('./form.view');
var Stocks = require('../collections/stock.collection');

Backbone.$ = $;
var ProfileView = Backbone.View.extend({
  el: "#main",
  initialize: function () {
    this.template = require('../../templates/profile.template.html');
    this.render();
  },
  render: function () {
    this.$el.html(_.template(this.template({
      title: this.model.get('title')
    })));
    var graphView = new GraphView({
      model: new GraphTrendsModel()
    });
    this.$("#graph").html(graphView.el);
    graphView.render();
    var stocks = new Stocks();
    var formView = new FormView({
      collection: stocks
    });
    formView.render();
  }
});
module.exports = ProfileView;
