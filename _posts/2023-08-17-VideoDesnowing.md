---
layout: post1
---


<h2 class="post-title" style="margin-bottom:7px;margin-top:0;font-weight:700;">Snow Removal in Video: </h2>
<h2 class="post-title" style="margin-bottom:20px;margin-top:0;">A New Dataset and A Novel Method</h2>

<div class="post-authors" style="margin-bottom:5px;">
<strong>Haoyu Chen</strong>, Jingjing Ren, Jinjin Gu, Hongtao Wu, Xuequan Lu, Haoming Cai, Lei Zhu
</div>

<div class="post-authors" style="margin-bottom:20px;">
International Conference on Computer Vision <strong>(ICCV)</strong>, 2023
</div>


<div class="post-line"></div>


  <div class="post-img-group">
    <img class="post-img" src="../assets/img/VideoDesnowing/1.gif" alt="Left Image">
    <img class="post-img" src="../assets/img/VideoDesnowing/2.gif" alt="Right Image">
  </div>

<!-- <img src="../assets/img/VideoDesnowing/1.gif" class="post-img" role="img"> -->


<h2 class="post-section">Abstract</h2>

Snowfall is a common weather phenomenon that can severely affect computer vision tasks by obscuring objects and scenes. However, existing deep learning-based snow removal methods are designed for single images only. In this paper, we target a more complex task – video snow removal, which aims to restore the clear video from the snowy video. To facilitate this task, we propose the first high-quality video dataset, which simulates realistic physical characteristics of snow and haze using a rendering engine and augmentation techniques. We also develop a deep learning framework for video snow removal. Specifically, we propose a snow-query temporal aggregation module and a snow-aware contrastive learning loss function. The module aggregates features between video frames and removes snow effectively, while the loss function helps identify and eliminate snow features. We conduct extensive experiments and demonstrate that our proposed dataset is more realistic than previous datasets, and the models trained on it achieve better performance in real-world snowing images. Our proposed method outperforms state-of-the-art video and image-based methods on both synthetic and real snowy videos.


  <div class="post-img-group">
    <img class="post-img" style="max-width:125%" src="../assets/img/VideoDesnowing/3.jpg" alt="Left Image">
  </div>



<h2 class="post-section"  style="font-weight:300;"><strong>R</strong>ealistic <strong>V</strong>ideo De<strong>S</strong>nowing <strong>D</strong>ataset</h2>

- <strong>RVSD</strong> contains a total of 110 pairs of videos. 
- Each pair contains <strong>snowy</strong> and  <strong>hazy</strong> videos and corresponding snow-free and haze-free ground truth videos. 
- We use a rendering engine (Unreal Engine 5) and various augmentation techniques to generate snow and haze with diverse and realistic physical properties. This results in more realistic and varied synthesized videos, which improve the model’s performance on real-world data. 


<div class="post-section"  style="font-weight:700;">Download</div>
<!-- <div style="font-weight:300;">Train (100 videos):  [Google Drive]  [Baidu Netdisk (password: 7t74)]</div>
<div style="font-weight:300;">Test (20 videos):  [Google Drive]  [Baidu Netdisk (password: 7t74)] </div> -->


- **Train (80 videos):**  
    [Google Drive]  [Baidu Netdisk (password: 7t74)]
- **Test (30 videos):**  
    [Google Drive]  [Baidu Netdisk (password: 7t74)]

<h2 class="post-section">Citation</h2>


```
@inproceedings{chen2023desnow,
  title={Snow Removal in Video: A New Dataset and A Novel Method},
  author={Chen, Haoyu and Ren, Jingjing and Gu, Jinjin and Wu, Hongtao and Lu, Xuequan and Cai, Haoming and Zhu, Lei},
  booktitle={Proceedings of the IEEE/CVF International Conference on Computer Vision},
  year={2023}
}
```