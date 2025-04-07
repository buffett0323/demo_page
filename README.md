# Timbre Encoder

This project implements a self-supervised timbre encoder using the SimSiam framework with a ResNet-50 backbone. The model is specifically designed for analyzing and comparing timbral characteristics in electronic dance music (EDM).

## Project Overview

The Timbre Encoder is trained on a dataset of 75,000 tracks from the Beatport EDM dataset. The training process involves:
- Extracting chorus sections using the All-In-One model
- Applying source separation
- Focusing on lead sounds using the "other" stem from VBDO settings
- Training with a contrastive loss function

## Live Demo

Check out the live demo of the Timbre Encoder at: [https://buffett0323.github.io/Timbre_Encoder/](https://buffett0323.github.io/Timbre_Encoder/)

The demo allows you to:
- Listen to testing audio clips
- Compare them with their top-3 most similar matches from the dataset
- View similarity scores for each match

## Technical Details

- **Framework**: SimSiam
- **Backbone**: ResNet-50
- **Dataset**: 75,000 tracks from Beatport EDM dataset
- **Preprocessing**: 
  - Chorus extraction using All-In-One model
  - Source separation
  - Focus on "other" stem for lead sounds
- **Training**: Contrastive loss function
- **Evaluation**: Timbre similarity search task

## Note

Some results may show the same song in both testing and training data due to the dataset parsing method using the All-In-One model.
