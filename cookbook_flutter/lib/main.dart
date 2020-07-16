import 'package:flutter/material.dart';

import 'BodySegment.dart';
import 'Recipe.dart';
import 'RecipeService.dart';

void main() {
  runApp(App());
}

class App extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Recipes',
      debugShowCheckedModeBanner: false,
      theme: ThemeData(
        backgroundColor: Color(0xFFEEF3DB),
        primaryColor: Color(0xFFB7D8D6),
        accentColor: Color(0xFF4D6466),
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ),
      home: RecipesPage(),
    );
  }
}

class RecipesPage extends StatefulWidget {
  @override
  _RecipesPageState createState() => _RecipesPageState();
}

class _RecipesPageState extends State<RecipesPage> {
  final RecipeService _recipeService = new RecipeService();

  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Theme.of(context).backgroundColor,
      appBar: AppBar(
          title: Text('Recipes',
              style: TextStyle(color: Theme.of(context).accentColor))),
      body: FutureBuilder(
          future: _recipeService.getRecipes(),
          builder:
              (BuildContext context, AsyncSnapshot<List<Recipe>> snapshot) {
            if (snapshot.hasData) {
              List<Recipe> recipes = snapshot.data;

              return ListView.builder(
                itemCount: recipes.length,
                itemBuilder: (BuildContext context, int index) {
                  Recipe recipe = recipes[index];

                  return Padding(
                    padding: EdgeInsets.only(top: 3, left: 5, right: 5),
                    child: Container(
                      decoration: BoxDecoration(
                        borderRadius: BorderRadius.all(Radius.circular(10.0)),
                        color: Theme.of(context).accentColor,
                      ),
                      child: Padding(
                        padding: EdgeInsets.only(left: 4, top: 2),
                        child: Column(
                          crossAxisAlignment: CrossAxisAlignment.start,
                          children: <Widget>[
                            Row(
                              crossAxisAlignment: CrossAxisAlignment.end,
                              children: <Widget>[
                                Padding(
                                  padding: const EdgeInsets.only(right: 5),
                                  child: Text(
                                    recipe.title,
                                    style: TextStyle(
                                      fontWeight: FontWeight.bold,
                                      fontSize: 18,
                                      color: Theme.of(context).primaryColor,
                                    ),
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(right: 5),
                                  child: Text(
                                    'Serves ${recipe.servings},',
                                    style: TextStyle(
                                      fontStyle: FontStyle.italic,
                                      fontSize: 10,
                                      color: Theme.of(context).primaryColor,
                                    ),
                                  ),
                                ),
                                Padding(
                                  padding: const EdgeInsets.only(right: 5),
                                  child: Text(
                                    'By ${recipe.author}',
                                    style: TextStyle(
                                      fontStyle: FontStyle.italic,
                                      fontSize: 10,
                                      color: Theme.of(context).primaryColor,
                                    ),
                                  ),
                                ),
                              ],
                            ),
                            Text(
                              recipe.description,
                              style: TextStyle(
                                fontStyle: FontStyle.italic,
                                fontSize: 10,
                                color: Theme.of(context).primaryColor,
                              ),
                            ),
                            Text(
                              'Ingredients',
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 14,
                                color: Theme.of(context).primaryColor,
                              ),
                            ),
                            ListView.builder(
                              scrollDirection: Axis.vertical,
                              shrinkWrap: true,
                              itemCount: recipe.ingredients.length,
                              itemBuilder: (BuildContext context, int index) {
                                String ingredient = recipe.ingredients[index];

                                return Text(
                                  ingredient,
                                  style: TextStyle(
                                    fontStyle: FontStyle.italic,
                                    fontSize: 10,
                                    color: Theme.of(context).primaryColor,
                                  ),
                                );
                              },
                            ),
                            Text(
                              'Recipe',
                              style: TextStyle(
                                fontWeight: FontWeight.bold,
                                fontSize: 14,
                                color: Theme.of(context).primaryColor,
                              ),
                            ),
                            ListView.builder(
                              scrollDirection: Axis.vertical,
                              shrinkWrap: true,
                              itemCount: recipe.body.length,
                              itemBuilder: (BuildContext context, int index) {
                                BodySegment bodySegment = recipe.body[index];

                                return Column(
                                  crossAxisAlignment: CrossAxisAlignment.start,
                                  children: <Widget>[
                                    Text(
                                      bodySegment.title,
                                      style: TextStyle(
                                        fontWeight: FontWeight.bold,
                                        fontSize: 12,
                                        color: Theme.of(context).primaryColor,
                                      ),
                                    ),
                                    Text(
                                      bodySegment.body,
                                      style: TextStyle(
                                        fontStyle: FontStyle.italic,
                                        fontSize: 10,
                                        color: Theme.of(context).primaryColor,
                                      ),
                                    ),
                                  ],
                                );
                              },
                            ),
                          ],
                        ),
                      ),
                    ),
                  );
                },
              );
            }
            return Center(child: CircularProgressIndicator());
          }),
    );
  }
}
