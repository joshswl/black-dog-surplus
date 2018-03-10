import Ember from 'ember';

export default Ember.Component.extend({
  items: [
    {
      image: 'custom-packaging-1.jpg',
      number: '#1',
      title: 'Bags & Colors!',
      desc: 'Black Dog Surplus, Inc. has the ability to manufacture a MilSpec Ration Bag in any color, with two color printing.',
    },
    {
      image: 'custom-packaging-2.jpg',
      number: '#2',
      title: 'Low Barrier!',
      desc: 'With an extremely LOW Minimum Order Quantity of ONLY 1000 units per imprint, why not have a ration kit that is unique to your organization?',
    },
    {
      image: 'custom-packaging-3.jpg',
      number: '#3',
      title: 'Get In Touch',
      desc: 'Make YOUR ration kits YOUR OWN thru our Custom Packaging Program. Contact us today and lets get Creative, Together!',
    },
  ]
});
