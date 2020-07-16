import 'package:flutter/material.dart';

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
        backgroundColor: Color(0xFFC1DFF0),
        primaryColor: Color(0xFF88CCF1),
        accentColor: Color(0xFF2D848A),
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
                                    'By ${recipe.author},',
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
