import 'package:flutter/material.dart';

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
      appBar: AppBar(title: Text('Recipes')),
    );
  }
}
