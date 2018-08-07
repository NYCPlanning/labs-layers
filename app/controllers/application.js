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

    fetch(`https://layers-api.planninglabs.nyc/v1/layer-groups`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: layerGroupsJSON,
    })
    .then(response => response.json())
    .then((json) => {
      // this.set('styleJSON', json.meta);
      this.map.setStyle(json.meta)
    })
    // .catch(err => reject(err));
  }

  @action
  handleMapLoad(map) {
    this.set('map', map);
  }

}
