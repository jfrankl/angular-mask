'use strict';

/**
 * @ngdoc service
 * @name angularMaskApp.importData
 * @description
 * # importData
 * Factory in the angularMaskApp.
 */
angular.module('angularMaskApp')
  .factory('geodata', function() { 
    return {
        "type": "FeatureCollection",
        "bbox": [
            38.8231374237319,
            -77.06589398452977,
            38.95948003879465,
            -76.92216353907064
        ],
        "features": [
            {
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    -76.9962745500105,
                                    38.90182856537368
                                ],
                                [
                                    -76.99402876180022,
                                    38.90182856537368
                                ],
                                [
                                    -76.99402876180022,
                                    38.9000808195851
                                ],
                                [
                                    -76.9962745500105,
                                    38.9000808195851
                                ],
                                [
                                    -76.9962745500105,
                                    38.90182856537368
                                ]
                            ]
                        ]
                    ]
                },
                "type": "Feature",
                "properties": {
                    "mission_set": {
                        "id": "127288",
                        "period": {
                            "start": "2014-09-06T10:00:00Z",
                            "end": "2014-09-06T18:00:00Z"
                        },
                        "_links": {
                            "self": {
                                "href": "https://staging.hunchlab.com/api/missionset/127288/",
                                "title": "127288"
                            },
                            "modified": {
                                "title": " ",
                                "href": "https://staging.hunchlab.com/api/users/4/",
                                "datetime": "2014-09-06T09:02:01.493Z"
                            },
                            "audit_info": {
                                "title": "Christopher Brown",
                                "queried_at": "2014-09-06T20:13:55.419Z",
                                "queried_by": "https://staging.hunchlab.com/api/users/2/"
                            },
                            "created": {
                                "title": " ",
                                "href": "https://staging.hunchlab.com/api/users/4/",
                                "datetime": "2014-09-06T09:02:01.493Z"
                            }
                        },
                        "shift_label": "First Shift",
                        "resources": [
                            {
                                "number_of_resources": 1,
                                "times_returning": 3,
                                "time_percent": 0.25,
                                "resource_type": "Patrol Car"
                            }
                        ],
                        "team_label": "0"
                    },
                    "event_models": [
                        {
                            "id": "dc_metro-robbery",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871811/",
                                    "title": "6871811"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:08.655Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:08.655Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Robbery",
                            "color": "#00da57",
                            "weight": 0.36134
                        },
                        {
                            "id": "dc_metro-homicide",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871810/",
                                    "title": "6871810"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:08.649Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:08.649Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Homicide",
                            "color": "#ac0000",
                            "weight": 0.172042
                        },
                        {
                            "id": "dc_metro-assault",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871809/",
                                    "title": "6871809"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:08.644Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:08.644Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Assault",
                            "color": "#bbea00",
                            "weight": 0.466528
                        },
                        {
                            "id": "dc_metro-arson",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871808/",
                                    "title": "6871808"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:08.639Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:08.639Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Arson",
                            "color": "#b60092",
                            "weight": 0.000091
                        }
                    ],
                    "recommended_dose": null,
                    "risk_percentile": 96.299,
                    "related_info": {
                        "recent_events": [
                            {
                                "importance": 1,
                                "data": [
                                    {
                                        "occurred_to": "2014-05-20T00:00:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514611/",
                                        "event_classes": [
                                            "Aggravated Assault Firearm"
                                        ],
                                        "location": [
                                          -76.99452638626099,
                                          38.9014203344932
                                        ],
                                        "address": "1600 BLOCK MARGARET ST",
                                        "occurred_from": "2014-05-20T00:00:00+00:00"
                                    },
                                    {
                                        "occurred_to": "2014-05-19T19:52:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514584/",
                                        "event_classes": [
                                            "Aggravated Assault Firearm"
                                        ],
                                        "location": [
                                          -76.99568510055542,
                                          38.900551983665146
                                        ],
                                        "address": "1600 BLOCK MARGARET ST",
                                        "occurred_from": "2014-05-19T19:52:00+00:00"
                                    }
                                ],
                                "version": 1,
                                "type": "recent_events",
                                "event_model": "Illegal BBQ"
                            },
                            {
                                "importance": 2,
                                "data": [
                                    {
                                        "occurred_to": "2014-05-20T00:00:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514611/",
                                        "event_classes": [
                                            "MVT"
                                        ],
                                        "location": [
                                          -76.99468510055542,
                                          38.900551983665146
                                        ],
                                        "address": "120 Runner Road",
                                        "occurred_from": "2014-05-20T00:00:00+00:00"
                                    },
                                    {
                                        "occurred_to": "2014-05-19T19:52:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514584/",
                                        "event_classes": [
                                            "MVT"
                                        ],
                                        "location": [
                                          -76.99452638626099,
                                          38.9034203344932
                                        ],
                                        "address": "220 Runner Road",
                                        "occurred_from": "2014-05-19T19:52:00+00:00"
                                    }
                                ],
                                "version": 1,
                                "type": "recent_events",
                                "event_model": "MVT"
                            }
                        ]
                    },
                    "id": "1153038",
                    "_links": {
                        "self": {
                            "href": "https://staging.hunchlab.com/api/missions/1153038/",
                            "title": "1153038"
                        },
                        "modified": {
                            "datetime": "2014-09-06T09:02:08.631Z",
                            "href": "https://staging.hunchlab.com/api/users/4/",
                            "title": " "
                        },
                        "audit_info": {
                            "title": "Christopher Brown",
                            "queried_at": "2014-09-06T20:13:55.419Z",
                            "queried_by": "https://staging.hunchlab.com/api/users/2/"
                        },
                        "created": {
                            "datetime": "2014-09-06T09:02:01.538Z",
                            "href": "https://staging.hunchlab.com/api/users/4/",
                            "title": " "
                        }
                    },
                    "bbox_leaflet": {
                        "northEast": {
                            "lat": 38.90182856537368,
                            "lng": -76.99402876180022
                        },
                        "southWest": {
                            "lat": 38.9000808195851,
                            "lng": -76.9962745500105
                        }
                    },
                    "risk_z_score": 2.54512
                }
            },
            {
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    -76.9962745500105,
                                    38.90357626814229
                                ],
                                [
                                    -76.99402876180022,
                                    38.90357626814229
                                ],
                                [
                                    -76.99402876180022,
                                    38.90182856537368
                                ],
                                [
                                    -76.9962745500105,
                                    38.90182856537368
                                ],
                                [
                                    -76.9962745500105,
                                    38.90357626814229
                                ]
                            ]
                        ]
                    ]
                },
                "type": "Feature",
                "properties": {
                    "mission_set": {
                        "id": "127288",
                        "period": {
                            "start": "2014-09-06T10:00:00Z",
                            "end": "2014-09-06T18:00:00Z"
                        },
                        "_links": {
                            "self": {
                                "href": "https://staging.hunchlab.com/api/missionset/127288/",
                                "title": "127288"
                            },
                            "modified": {
                                "datetime": "2014-09-06T09:02:01.493Z",
                                "href": "https://staging.hunchlab.com/api/users/4/",
                                "title": " "
                            },
                            "audit_info": {
                                "title": "Christopher Brown",
                                "queried_at": "2014-09-06T20:13:55.419Z",
                                "queried_by": "https://staging.hunchlab.com/api/users/2/"
                            },
                            "created": {
                                "datetime": "2014-09-06T09:02:01.493Z",
                                "href": "https://staging.hunchlab.com/api/users/4/",
                                "title": " "
                            }
                        },
                        "shift_label": "First Shift",
                        "resources": [
                            {
                                "number_of_resources": 1,
                                "times_returning": 3,
                                "time_percent": 0.25,
                                "resource_type": "Patrol Car"
                            }
                        ],
                        "team_label": "0"
                    },
                    "event_models": [
                        {
                            "id": "dc_metro-robbery",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871807/",
                                    "title": "6871807"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:08.062Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:08.062Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Robbery",
                            "color": "#00da57",
                            "weight": 0.482599
                        },
                        {
                            "id": "dc_metro-homicide",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871806/",
                                    "title": "6871806"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:08.056Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:08.056Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Homicide",
                            "color": "#ac0000",
                            "weight": 0.153922
                        },
                        {
                            "id": "dc_metro-assault",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871805/",
                                    "title": "6871805"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:08.051Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:08.051Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Assault",
                            "color": "#bbea00",
                            "weight": 0.363391
                        },
                        {
                            "id": "dc_metro-arson",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871804/",
                                    "title": "6871804"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:08.046Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:08.046Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Arson",
                            "color": "#b60092",
                            "weight": 0.000088
                        }
                    ],
                    "recommended_dose": null,
                    "risk_percentile": 96.525,
                    "related_info": {
                        "recent_events": [
                            {
                                "importance": 1,
                                "data": [
                                    {
                                        "occurred_to": "2014-05-20T00:00:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514611/",
                                        "event_classes": [
                                            "Aggravated Assault Firearm"
                                        ],
                                        "location": [
                                          -76.99527740478516,
                                          38.90278963537611
                                        ],
                                        "address": "1500 BLOCK PORTER ST",
                                        "occurred_from": "2014-05-20T00:00:00+00:00"
                                    },
                                    {
                                        "occurred_to": "2014-05-19T19:52:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514584/",
                                        "event_classes": [
                                            "Aggravated Assault Firearm"
                                        ],
                                        "location": [
                                          -76.9943118095398,
                                          38.90282303262872
                                        ],
                                        "address": "159 BLOCK PUGET RD",
                                        "occurred_from": "2014-05-19T19:52:00+00:00"
                                    }
                                ],
                                "version": 1,
                                "type": "recent_events",
                                "event_model": "Running in Place, Illegally"
                            },
                            {
                                "importance": 2,
                                "data": [
                                    {
                                        "occurred_to": "2014-05-20T00:00:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514611/",
                                        "event_classes": [
                                            "MVT"
                                        ],
                                        "location": [
                                          -76.97527740478516,
                                          38.90278963537611
                                        ],
                                        "address": "120 Runner Road",
                                        "occurred_from": "2014-05-20T00:00:00+00:00"
                                    },
                                    {
                                        "occurred_to": "2014-05-19T19:52:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514584/",
                                        "event_classes": [
                                            "MVT"
                                        ],
                                        "location": [
                                          -76.99527740478516,
                                          38.90273963537611
                                        ],
                                        "address": "220 Runner Road",
                                        "occurred_from": "2014-05-19T19:52:00+00:00"
                                    }
                                ],
                                "version": 1,
                                "type": "recent_events",
                                "event_model": "Peeling Out in Your Ford Focus"
                            }
                        ]
                    },
                    "id": "1153037",
                    "_links": {
                        "self": {
                            "href": "https://staging.hunchlab.com/api/missions/1153037/",
                            "title": "1153037"
                        },
                        "modified": {
                            "datetime": "2014-09-06T09:02:08.039Z",
                            "href": "https://staging.hunchlab.com/api/users/4/",
                            "title": " "
                        },
                        "audit_info": {
                            "title": "Christopher Brown",
                            "queried_at": "2014-09-06T20:13:55.419Z",
                            "queried_by": "https://staging.hunchlab.com/api/users/2/"
                        },
                        "created": {
                            "datetime": "2014-09-06T09:02:01.537Z",
                            "href": "https://staging.hunchlab.com/api/users/4/",
                            "title": " "
                        }
                    },
                    "bbox_leaflet": {
                        "northEast": {
                            "lat": 38.90357626814229,
                            "lng": -76.99402876180022
                        },
                        "southWest": {
                            "lat": 38.90182856537368,
                            "lng": -76.9962745500105
                        }
                    },
                    "risk_z_score": 2.60514
                }
            },
            {
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    -77.0254697967444,
                                    38.89833303077704
                                ],
                                [
                                    -77.0232240085341,
                                    38.89833303077704
                                ],
                                [
                                    -77.0232240085341,
                                    38.89658519895012
                                ],
                                [
                                    -77.0254697967444,
                                    38.89658519895012
                                ],
                                [
                                    -77.0254697967444,
                                    38.89833303077704
                                ]
                            ]
                        ]
                    ]
                },
                "type": "Feature",
                "properties": {
                    "mission_set": {
                        "id": "127288",
                        "period": {
                            "start": "2014-09-06T10:00:00Z",
                            "end": "2014-09-06T18:00:00Z"
                        },
                        "_links": {
                            "self": {
                                "href": "https://staging.hunchlab.com/api/missionset/127288/",
                                "title": "127288"
                            },
                            "modified": {
                                "datetime": "2014-09-06T09:02:01.493Z",
                                "href": "https://staging.hunchlab.com/api/users/4/",
                                "title": " "
                            },
                            "audit_info": {
                                "title": "Christopher Brown",
                                "queried_at": "2014-09-06T20:13:55.419Z",
                                "queried_by": "https://staging.hunchlab.com/api/users/2/"
                            },
                            "created": {
                                "datetime": "2014-09-06T09:02:01.493Z",
                                "href": "https://staging.hunchlab.com/api/users/4/",
                                "title": " "
                            }
                        },
                        "shift_label": "First Shift",
                        "resources": [
                            {
                                "number_of_resources": 1,
                                "times_returning": 3,
                                "time_percent": 0.25,
                                "resource_type": "Patrol Car"
                            }
                        ],
                        "team_label": "0"
                    },
                    "event_models": [
                        {
                            "id": "dc_metro-robbery",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871803/",
                                    "title": "6871803"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:07.507Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:07.507Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Robbery",
                            "color": "#00da57",
                            "weight": 0.486152
                        },
                        {
                            "id": "dc_metro-homicide",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871802/",
                                    "title": "6871802"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:07.501Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:07.500Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Homicide",
                            "color": "#ac0000",
                            "weight": 0.231066
                        },
                        {
                            "id": "dc_metro-assault",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871801/",
                                    "title": "6871801"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:07.496Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:07.496Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Assault",
                            "color": "#bbea00",
                            "weight": 0.282704
                        },
                        {
                            "id": "dc_metro-arson",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871800/",
                                    "title": "6871800"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:07.490Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:07.490Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Arson",
                            "color": "#b60092",
                            "weight": 0.000077
                        }
                    ],
                    "recommended_dose": null,
                    "risk_percentile": 94.88,
                    "related_info": {
                        "recent_events": [
                            {
                                "importance": 1,
                                "data": [
                                    {
                                        "occurred_to": "2014-05-20T00:00:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514611/",
                                        "event_classes": [
                                            "Aggravated Assault Firearm"
                                        ],
                                        "location": [
                                          -77.02345132827757,
                                          38.89705342419506
                                        ],
                                        "address": "1600 BLOCK MARGARET ST",
                                        "occurred_from": "2014-05-20T00:00:00+00:00"
                                    },
                                    {
                                        "occurred_to": "2014-05-19T19:52:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514584/",
                                        "event_classes": [
                                            "Aggravated Assault Firearm"
                                        ],
                                        "location": [
                                          -77.02376246452332,
                                          38.89676117395676
                                        ],
                                        "address": "1600 BLOCK MARGARET ST",
                                        "occurred_from": "2014-05-19T19:52:00+00:00"
                                    }
                                ],
                                "version": 1,
                                "type": "recent_events",
                                "event_model": "Buying a Computer without a License"
                            },
                            {
                                "importance": 2,
                                "data": [
                                    {
                                        "occurred_to": "2014-05-20T00:00:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514611/",
                                        "event_classes": [
                                            "MVT"
                                        ],
                                        "location": [
                                          -77.02544132827757,
                                          38.89705542419506
                                        ],
                                        "address": "120 Runner Road",
                                        "occurred_from": "2014-05-20T00:00:00+00:00"
                                    },
                                    {
                                        "occurred_to": "2014-05-19T19:52:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514584/",
                                        "event_classes": [
                                            "MVT"
                                        ],
                                        "location": [
                                          -77.02355246452332,
                                          38.89676217395676
                                        ],
                                        "address": "220 Runner Road",
                                        "occurred_from": "2014-05-19T19:52:00+00:00"
                                    }
                                ],
                                "version": 1,
                                "type": "recent_events",
                                "event_model": "Playing Games"
                            }
                        ]
                    },
                    "id": "1153036",
                    "_links": {
                        "self": {
                            "href": "https://staging.hunchlab.com/api/missions/1153036/",
                            "title": "1153036"
                        },
                        "modified": {
                            "datetime": "2014-09-06T09:02:07.463Z",
                            "href": "https://staging.hunchlab.com/api/users/4/",
                            "title": " "
                        },
                        "audit_info": {
                            "title": "Christopher Brown",
                            "queried_at": "2014-09-06T20:13:55.419Z",
                            "queried_by": "https://staging.hunchlab.com/api/users/2/"
                        },
                        "created": {
                            "datetime": "2014-09-06T09:02:01.537Z",
                            "href": "https://staging.hunchlab.com/api/users/4/",
                            "title": " "
                        }
                    },
                    "bbox_leaflet": {
                        "northEast": {
                            "lat": 38.89833303077704,
                            "lng": -77.0232240085341
                        },
                        "southWest": {
                            "lat": 38.89658519895012,
                            "lng": -77.0254697967444
                        }
                    },
                    "risk_z_score": 2.10988
                }
            },
            {
                "geometry": {
                    "type": "MultiPolygon",
                    "coordinates": [
                        [
                            [
                                [
                                    -76.9962745500105,
                                    38.886097304624485
                                ],
                                [
                                    -76.99178297358992,
                                    38.886097304624485
                                ],
                                [
                                    -76.99178297358992,
                                    38.884349171681485
                                ],
                                [
                                    -76.99402876180022,
                                    38.884349171681485
                                ],
                                [
                                    -76.99402876180022,
                                    38.882600995724154
                                ],
                                [
                                    -76.9962745500105,
                                    38.882600995724154
                                ],
                                [
                                    -76.9962745500105,
                                    38.886097304624485
                                ]
                            ]
                        ]
                    ]
                },
                "type": "Feature",
                "properties": {
                    "mission_set": {
                        "id": "127288",
                        "period": {
                            "start": "2014-09-06T10:00:00Z",
                            "end": "2014-09-06T18:00:00Z"
                        },
                        "_links": {
                            "self": {
                                "href": "https://staging.hunchlab.com/api/missionset/127288/",
                                "title": "127288"
                            },
                            "modified": {
                                "datetime": "2014-09-06T09:02:01.493Z",
                                "href": "https://staging.hunchlab.com/api/users/4/",
                                "title": " "
                            },
                            "audit_info": {
                                "title": "Christopher Brown",
                                "queried_at": "2014-09-06T20:13:55.419Z",
                                "queried_by": "https://staging.hunchlab.com/api/users/2/"
                            },
                            "created": {
                                "datetime": "2014-09-06T09:02:01.493Z",
                                "href": "https://staging.hunchlab.com/api/users/4/",
                                "title": " "
                            }
                        },
                        "shift_label": "First Shift",
                        "resources": [
                            {
                                "number_of_resources": 1,
                                "times_returning": 3,
                                "time_percent": 0.25,
                                "resource_type": "Patrol Car"
                            }
                        ],
                        "team_label": "0"
                    },
                    "event_models": [
                        {
                            "id": "dc_metro-robbery",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871799/",
                                    "title": "6871799"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:06.975Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:06.975Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Robbery",
                            "color": "#00da57",
                            "weight": 0.851084
                        },
                        {
                            "id": "dc_metro-homicide",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871798/",
                                    "title": "6871798"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:06.970Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:06.970Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Homicide",
                            "color": "#ac0000",
                            "weight": 0.13279
                        },
                        {
                            "id": "dc_metro-assault",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871797/",
                                    "title": "6871797"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:06.965Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:06.965Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Assault",
                            "color": "#bbea00",
                            "weight": 0.016022
                        },
                        {
                            "id": "dc_metro-arson",
                            "_links": {
                                "self": {
                                    "href": "https://staging.hunchlab.com/api/missioneventmodels/6871796/",
                                    "title": "6871796"
                                },
                                "modified": {
                                    "datetime": "2014-09-06T09:02:06.960Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                },
                                "audit_info": {
                                    "title": "Christopher Brown",
                                    "queried_at": "2014-09-06T20:13:55.419Z",
                                    "queried_by": "https://staging.hunchlab.com/api/users/2/"
                                },
                                "created": {
                                    "datetime": "2014-09-06T09:02:06.959Z",
                                    "href": "https://staging.hunchlab.com/api/users/4/",
                                    "title": " "
                                }
                            },
                            "label": "Arson",
                            "color": "#b60092",
                            "weight": 0.000103
                        }
                    ],
                    "recommended_dose": null,
                    "risk_percentile": 95.97,
                    "related_info": {
                        "recent_events": [
                            {
                                "importance": 1,
                                "data": [
                                    {
                                        "occurred_to": "2014-05-20T00:00:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514611/",
                                        "event_classes": [
                                            "Aggravated Assault Firearm"
                                        ],
                                        "location": [
                                          -76.99193000793457,
                                          38.883884269762625
                                        ],
                                        "address": "1600 BLOCK MARGARET ST",
                                        "occurred_from": "2014-05-20T00:00:00+00:00"
                                    },
                                    {
                                        "occurred_to": "2014-05-19T19:52:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514584/",
                                        "event_classes": [
                                            "Aggravated Assault Firearm"
                                        ],
                                        "location": [
                                          -76.99579238891602,
                                          38.88522050325215
                                        ],
                                        "address": "1600 BLOCK MARGARET ST",
                                        "occurred_from": "2014-05-19T19:52:00+00:00"
                                    }
                                ],
                                "version": 1,
                                "type": "recent_events",
                                "event_model": "Roller Skating in Public"
                            },
                            {
                                "importance": 2,
                                "data": [
                                    {
                                        "occurred_to": "2014-05-20T00:00:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514611/",
                                        "event_classes": [
                                            "MVT"
                                        ],
                                        "location": [
                                          -76.99363000793457,
                                          38.883684269762625
                                        ],
                                        "address": "120 Runner Road",
                                        "occurred_from": "2014-05-20T00:00:00+00:00"
                                    },
                                    {
                                        "occurred_to": "2014-05-19T19:52:00+00:00",
                                        "self": "https://staging.hunchlab.com/api/events/5514584/",
                                        "event_classes": [
                                            "MVT"
                                        ],
                                        "location": [
                                          -76.99263000793457,
                                          38.876694269762625
                                        ],
                                        "address": "220 Runner Road",
                                        "occurred_from": "2014-05-19T19:52:00+00:00"
                                    }
                                ],
                                "version": 1,
                                "type": "recent_events",
                                "event_model": "Hosting an Event"
                            }
                        ]
                    },
                    "id": "1153035",
                    "_links": {
                        "self": {
                            "href": "https://staging.hunchlab.com/api/missions/1153035/",
                            "title": "1153035"
                        },
                        "modified": {
                            "datetime": "2014-09-06T09:02:06.953Z",
                            "href": "https://staging.hunchlab.com/api/users/4/",
                            "title": " "
                        },
                        "audit_info": {
                            "title": "Christopher Brown",
                            "queried_at": "2014-09-06T20:13:55.419Z",
                            "queried_by": "https://staging.hunchlab.com/api/users/2/"
                        },
                        "created": {
                            "datetime": "2014-09-06T09:02:01.537Z",
                            "href": "https://staging.hunchlab.com/api/users/4/",
                            "title": " "
                        }
                    },
                    "bbox_leaflet": {
                        "northEast": {
                            "lat": 38.886097304624485,
                            "lng": -76.99178297358992
                        },
                        "southWest": {
                            "lat": 38.882600995724154,
                            "lng": -76.9962745500105
                        }
                    },
                    "risk_z_score": 2.3785
                }
            }
        ]
    }
  })
