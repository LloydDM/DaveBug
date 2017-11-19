var daveBugApp = angular.module("daveBugApp", []);

daveBugApp.controller("bugListController", function($scope) {
  $scope.statusSort = "";
  $scope.bugs = [
    {
      "bug_id": 00001,
      "bug_title": "This bug is open.  It is bug 00001",
      "bug_status": "Open",
      "bug_created_date": "2017-11-05",
      "bug_created_by": "David Lloyd",
      "bug_severity": "Medium",
      "bug_priority": "High",
      "bug_resolution": "Open",
      "bug_description": "This is a <i>description<i> of bug 00001",
      "bug_reproduction_steps": ["This is step number 1 for bug 00001",
                                 "This is step number 2 for bug 00001",
                                 "This is step number 3 for bug 00001"
                                ],
      "bug_observed_results": "These are the Observed Results for bug 00001",
      "bug_expected_results": "This is the expected behavior for bug 00001",
      "bug_notes": ["These are the notes for bug 00001",
                    "This is another note for bug 00001"
                   ],
      "bug_attachments": [],
      "bug_timeline": [],
      "bug_comments": []
    },
    {
      "bug_id": 00002,
      "bug_title": "This bug is closed.  It is bug 00002",
      "bug_status": "Closed",
      "bug_created_date": "2017-11-04",
      "bug_created_by": "Liam Madson",
      "bug_severity": "Low",
      "bug_priority": "Low",
      "bug_resolution": "Fixed",
      "bug_description": "This is a <i>description<i> of bug 00002",
      "bug_reproduction_steps": ["This is step number 1 for bug 00002",
                                 "This is step number 2 for bug 00002"
                                ],
      "bug_observed_results": "These are the Observed Results for bug 00002",
      "bug_expected_results": "This is the expected behavior for bug 00002",
      "bug_notes": ["These are the notes for bug 00002",
                    "This is another note for bug 00002"
                   ],
      "bug_attachments": [],
      "bug_timeline": [],
      "bug_comments": []
    },
    {
      "bug_id": 00003,
      "bug_title": "This bug is an open showstopper.  It is bug 00003",
      "bug_status": "Open",
      "bug_created_date": "2014-12-14",
      "bug_created_by": "David Lloyd",
      "bug_severity": "Showstopper",
      "bug_priority": "High",
      "bug_resolution": "Open",
      "bug_description": "This is a <i>description<i> of bug 00003",
      "bug_reproduction_steps": ["This is step number 1 for bug 00003",
                                 "This is step number 2 for bug 00003",
                                 "This is step number 3 for bug 00003"
                                ],
      "bug_observed_results": "These are the Observed Results for bug 00003",
      "bug_expected_results": "This is the expected behavior for bug 00003",
      "bug_notes": ["These are the notes for bug 00003",
                    "This is another note for bug 00003"
                   ],
      "bug_attachments": [],
      "bug_timeline": [],
      "bug_comments": []
    },
    {
      "bug_id": 00004,
      "bug_title": "This bug is open.  It is bug 00004",
      "bug_status": "Open",
      "bug_created_date": "2017-04-07",
      "bug_created_by": "Jacob Jensen",
      "bug_severity": "Low",
      "bug_priority": "Low",
      "bug_resolution": "Wont't Fix",
      "bug_description": "This is a <i>description<i> of bug 00004",
      "bug_reproduction_steps": ["This is step number 1 for bug 00004"],
      "bug_observed_results": "These are the Observed Results for bug 00004",
      "bug_expected_results": "This is the expected behavior for bug 00004",
      "bug_notes": ["These are the notes for bug 00004",
                    "This is another note for bug 00004"
                   ],
      "bug_attachments": [],
      "bug_timeline": [],
      "bug_comments": []
    }
  ];
});