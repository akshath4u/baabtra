db.system.js.save(
	{
		_id:"function_create_newplan",
		value:function(newPlan)
		{
			newPlan.createdDate=Date();
			newPlan.updatedDate=Date();
			db.clnBillingPlan.insert(newPlan);
	}});