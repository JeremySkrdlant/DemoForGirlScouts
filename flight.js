#pragma strict
var speedMultiplier = 5;
private var startPoint:Vector2;

function Start () {

}

function Update () {
	if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
	{
		startPoint = Input.GetTouch(0).position;
	}

	if(Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Ended){
		var end = Input.GetTouch(0).position;
		GetComponent(Rigidbody2D).AddForce(Vector2((startPoint.x - end.x) * speedMultiplier,
												   (startPoint.y - end.y) * speedMultiplier));
	}
}