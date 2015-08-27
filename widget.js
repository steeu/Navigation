WAF.define('Navigation', ['waf-core/widget'], function(widget) {
	
    var Navigation = widget.create('Navigation', {
    	tagName: 'ul',
        init: function() {
        	var _this = this;
        	
			_this.node.innerHTML = '<li>Navigation</li>';

			_this.template.onDataChange(function(rows) {
	            _this.node.innerHTML = rows.join('');
	        });
        },
        collection: widget.property({
		    type: 'datasource'
		}),
		template: widget.property({
		    type: 'template',
		    templates: [{
		        name: 'Name',
		        template: '<li>{{name}}</li>'
		    }, {
		        name: 'Link',
		        template: '<li><a href="{{url}}">{{name}}</a></li>'
		    }],
		    datasourceProperty: 'collection'
		})
    });

    return Navigation;

});

/* For more information, refer to http://doc.wakanda.org/Wakanda/help/Title/en/page3871.html */