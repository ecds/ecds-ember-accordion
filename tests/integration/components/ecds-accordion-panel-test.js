import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('ecds-accordion-panel', 'Integration | Component | ecds accordion panel', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ecds-accordion-panel}}`);

  assert.equal(this.$().text().trim(), '');

  [
    {
        name: 'Magrathea',
        description: "Magrathea is an ancient planet located in orbit around the twin suns Soulianis and Rahm in the heart of the Horsehead Nebula. It was the home of a new form of specialist industry: custom-made, luxury planet building. Hyperspatial engineers sucked matter through white holes in space to form dream planets - gold planets, square planets, glass planets, platinum planets, soft rubber planets with lots of earthquakes - all lovingly made to meet the exacting standards that the Galaxy's richest men naturally came to expect."
    },{
        name: 'Earth',
        description: "Earth, also known as Sol III, was a giant supercomputer designed to find the Ultimate Question of Life, the Universe and Everything. Designed by Deep Thought and built by the Magratheans, it was commonly mistaken for a planet, especially by the ape descendants who lived on it. It was situated far out in the uncharted backwaters of the unfashionable end of the Western Spiral Arm of the Galaxy."
    }, {
        name: 'Damogran',
        description: "Damogran is a planet that is approximately 2,500 light years from Earth on the fashionable Eastern Side of the Galaxy. However, it, is hot, remote and almost entirely unheard of. This made it an optimal location for the secretive construction of the Heart of Gold. For the most part, Damogran is an extremely inconveniently arranged planet. It consists of nothing but middling to large desert islands separated by very pretty but annoyingly wide stretches of ocean. This makes the use of an ion drive delta boat a practical necessity."
    }
  ]

  // Template block usage:
  this.render(hbs`
  {{#ecds-accordion-panel items=[
    {
        name: 'Magrathea',
        description: "Magrathea is an ancient planet located in orbit around the twin suns Soulianis and Rahm in the heart of the Horsehead Nebula. It was the home of a new form of specialist industry: custom-made, luxury planet building. Hyperspatial engineers sucked matter through white holes in space to form dream planets - gold planets, square planets, glass planets, platinum planets, soft rubber planets with lots of earthquakes - all lovingly made to meet the exacting standards that the Galaxy's richest men naturally came to expect."
    },{
        name: 'Earth',
        description: "Earth, also known as Sol III, was a giant supercomputer designed to find the Ultimate Question of Life, the Universe and Everything. Designed by Deep Thought and built by the Magratheans, it was commonly mistaken for a planet, especially by the ape descendants who lived on it. It was situated far out in the uncharted backwaters of the unfashionable end of the Western Spiral Arm of the Galaxy."
    }, {
        name: 'Damogran',
        description: "Damogran is a planet that is approximately 2,500 light years from Earth on the fashionable Eastern Side of the Galaxy. However, it, is hot, remote and almost entirely unheard of. This made it an optimal location for the secretive construction of the Heart of Gold. For the most part, Damogran is an extremely inconveniently arranged planet. It consists of nothing but middling to large desert islands separated by very pretty but annoyingly wide stretches of ocean. This makes the use of an ion drive delta boat a practical necessity."
    }
  ] as |planet panel|}}
  {{#panel.header}}
    {{planet.name}}
  {{/panel.header}}
  {{#panel.body}}
   {{planet.description}}
  {{/panel.body}}
{{/ecds-accordion-panel}}
  `);

  console.log(this.$().text());

  assert.equal(this.$().text(), 'template block');
});
