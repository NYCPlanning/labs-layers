import Controller from '@ember/controller';
import { action, computed } from '@ember-decorators/object';
import fetch from 'fetch';

export default class ApplicationController extends Controller {
  taxLots = true
  zoningDistricts = true

  @computed('taxLots', 'zoningDistricts')
  get layerGroupsJSON() {
    const taxLots = this.get('taxLots');
    const zoningDistricts = this.get('zoningDistricts');

    const layerGroupsArray = [];

    if (taxLots) { layerGroupsArray.push('tax-lots'); }
    if (zoningDistricts) { layerGroupsArray.push('zoning-districts'); }

    return JSON.stringify({ "layer-groups": layerGroupsArray });
  }

  @action
  getLayerGroups() {
    const layerGroupsJSON = this.get('layerGroupsJSON');

    // fetch(`http://localhost:3000/v1/layer-groups`, {
    fetch(`https://layers-api.planninglabs.nyc/v1/layer-groups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: layerGroupsJSON,
    })
    .then(response => response.json())
    .then((json) => {
      // how to unpack layers from the jsonapi layergroup response wihtout ember data\
      const { data, included, meta } = json;
      this.map.setStyle(meta.mapboxStyle);
      data.forEach((layerGroup) => {
        const layerIds = layerGroup.relationships.layers.data.map(d => d.id);
        layerIds.forEach((layerId) => {
          const { style: layer } = included.find(d => d.id === layerId).attributes;
          this.map.addLayer(layer);
        })
      })

    })
    // .catch(err => reject(err));
  }

  @action
  handleMapLoad(map) {
    this.set('map', map);
  }

}
