import 'package:flutter/foundation.dart';
import 'BodySegment.dart';

class Recipe {
  String id;
  String title;
  String description;
  String author;
  List ingredients;
  int servings;
  List<BodySegment> body;

  Recipe(
      {@required this.id,
      @required this.title,
      @required this.description,
      @required this.author,
      @required this.ingredients,
      @required this.servings,
      @required this.body});
}
