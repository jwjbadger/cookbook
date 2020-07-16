import 'dart:convert';
import 'package:cookbook_flutter/BodySegment.dart';
import 'package:http/http.dart' as http;

import 'Recipe.dart';

class RecipeService {
  final String rootUrl = "http://10.3.7.175:4000/";

  Future<List<Recipe>> getRecipes() async {
    http.Response res = await http.get(rootUrl + 'cookbook/');
    List<dynamic> listData = jsonDecode(res.body);

    List<Recipe> recipes = [];

    for (var data in listData) {
      List<BodySegment> body = [];

      for (var i in data['body']) {
        body.add(new BodySegment(title: i['title'], body: i['body']));
      }

      recipes.add(Recipe(
        id: data['_id'],
        author: data['author'],
        description: data['description'],
        title: data['title'],
        servings: data['servings'].round(),
        ingredients: data['ingredients'],
        body: body,
      ));
    }

    return recipes;
  }
}
