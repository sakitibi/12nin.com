window.onload = function(){
　var c = 14; //ランダムに表示するiframe内URLの数
　var ifm = document.getElementById('12ninadmanager');
　var r = Math.floor(Math.random()*c);
　var urls = new Array();
　urls[0] = 'https://sin.creativecdn.com/imp-delivery?tk=MpFvCkohMur4sN-gR7jJg5YHgLMwPpOOJtzU10lbi09qkYbF6jQv-pX_OjhujmetdkzLOa8pV2KrftZjX7K_-u6e56cn7N-LfviDDVTrAqpy4DViLqRqlNiVrXtzGgN0IdXsneybht0gSR4dgN8EHNloreEclH1OEQTrwZxfmfE8DRdF5SuCocwcEFaCsxZK8vqoD9az2nkgEBsRL5ZqVaaOk5jjXsQQVVLYmMsrzaFYlNiLZM4UySVutBkJRQZuVO-ORxjlWW7cdquC4BnerOcGFpVlzr305ZBflSwoBvUhz5aQuIsxnQh_u1MWjXQTtjiB0Ho281JDKUbvQUG9c-Nn-GEiLxIfq7NyU6IHacjg5TcqyxW9APYkaesi8FnuOdZL7a4Tq_ltCETyH68RaA&curl=https%3A%2F%2Ftg.socdm.com%2Frd%2Fv1%2Fz%2FhKFj2gD_Y2hzbT0yMzgsYzJmMmRmMTcvMTYyMjI2L1NTUExPQy8xMzQ4NjAyLzI5MDQ4Ny4yOTUyMjUuMTM0ODYwMi8yMjc0Mjk2LzE3MzM4Mi8xNjIyMjY6U1NQTE9DOiovY3Q9MTc0Mzk4MTE0MzIyMztzcj1odHRwcztkc3BpZD00MTtwcj15eFZQejVtMFNyOEstTGFPUVFsQ0NSd0w7cHJiPXlRO3Bybz15UTtwcm9jPUpQWTtjcmQyeT0xNDkuNTIwMDAwMDAwMDAwMDE7Y3J5MmQ9MC4wMDY2ODgwNjg0ODU4MjEyOTM5O2RzcGlkPTQxO2Z0eXBlPTE7aWR4PTA7pXNlcWlk2gAkMTk3NDJhYzgtOTA4ZC1hYzBiLWIzNzgtOTE1MDMxMjI0MDE0p3NlcXRpbWWtMTc0Mzk4MTE0MzIyM6R4dWlkuFoxWVJhOENvOFlBQUFHNlFCdzRBQUFBQQ%2Fp%2Fctsv%3Da-ad40305%3Bseqid%3D19742ac8-908d-ac0b-b378-915031224014%3Bseqctx%3Dgat3by5hZy5mdHlwZaEx%3B%2Fg%2FU%3A%3Furl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250406_z0ja2e9GoKnNISvBECcN%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin';
  urls[1] = 'https://ads.as.criteo.com/delivery/r/afr.php?u=%7CebRtXdla6rqV7jKlguVBj04zki0jfcjudUaBXaMWmYY%3D%7C&c1=Dcz_gsP0hEuJH1VnunqGy1Gv4jg2UtNuZh6rIexvwbPdnT_XaVBcsU03qj3WbcJ2oD-MMQfu1V5kn3g-XtdDbI_A-puzn0zM8ZoG_WJz8XoJKcL1yycTOFlXOPIP7BQRnVP9UnsUfdUzX4JEsP9Q08VbHA8PwlQzoXlTzcTKgi1UmOVlYjv_xi0Kzztef-cFNUGFW0NyiXPw8PAh6v8pZd9_YnNjoFI-eFzGZbfadKZhghadHctbEPILc7xIm29SNAmDmqnVbMCcfpyvsfBbfUeHntFdPI5F6rUMnAQ1OFpvx8i6kMKojfNTN6k86C8QbL3ZXGaGA5eDW5bQAKx8WNQtG9SuvFdZTjqobKcMky_me_oFNHw-dvQc_FIvmB2ybbv_V1EMvTPh9dKaMmbPyqFmdXXDHpRK7k8Q7ifrrqE57Hg_AdtDeNKOOQ01DlOqBfYiFtDDhDtS6MD7CHIl7eO6A6jNG1dqf0UW7SDOrzx0N6G8_C6pLtkMT3CIiO2r_sJfTgU8BZ659e3Ifre5NYjGRtG7M7rEDVHU96st_dAa93MR_dSrrHszKg6WbQMYYFhCUtRF9R1puk1yr5xd4D5Y9dXhYF9uGmJ8u1O9AYopERtLC-mE99W3ZHcjYsZ8o8YJv3k9FANOQLtp9iZnP5rUopxk6KSmd_GXuTXaJg2HZXKj7-uCzw1JSXbftVzDkf1hD5y03ofI0d1MA5yYdw';
  urls[2] = 'https://sin.creativecdn.com/imp-delivery?tk=_AwA9klxhQy9EFfZg0rQFluEwBjt7FEoC_MaWMJ6qjd5eW-NaA61WCjoJP91Mi0Zg4eR3W6m4SGzm4oKjXNSnkbuhBIcPPuSd061xJWxXCcmI8-2oV8DF4Fm8vhMIO-jJonAy2fvZ_8L52FecVrWxPj_8fwM5_gqDpohhxSANnoIGssI81xDMS_EOvpEZAWpTP7ARI9n_zTrAjgxV32UL1IgQGffWEH29RfpFMA1SJ3QmZ8GU7QwxDoRvtJKxt2OiPeDvDxWHuYc4bEF_kUn5f5XkqL3QK2DuvwVqyqKfDwiZZOfs1IewfERl5hdeVh-sIi38R5VYTmZsqNluY-u-vJUz4EhZiAlXLoE5rdU4MA&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCxjpUCRjzZ5m1Asi_vcAPl56h4Q_A8b7GbfW6gY24DsCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi0zNzA5NTY1OTY4MzY3ODc1yAEJqQLiqn0APDs9PuACAKgDAcgDAqoE-QFP0ARuhvNNibsMn86XGzXS5RooveZJdlF-Q_WJ8pxCiGRMgg9c3Zx13Fc-j4Fnb-FgDLQL3OhIK9VqHODxAa08TbmAeqtlcIsz3faox7b4gcpy0DgKtqzyT4uhbhjT5-7KnrE32UoAyuvuUGCZJK7OATqVo2mNiar49_V8HrgHgdJNRzGHMm2JuUL578gWCzj-dXpSkzJAIdDGTT85sLVXfkfVMR5eHZKysV2k5RYuliBCN62Z9lhfJrew6jWL5bE__vyB75-72eiPDyl3nbEuII-96YQaDULeJOi8EUtLNZlPwFZ-EkhSgxh82uityiGRbC_vOdls0ITgBAGABqqEkvTCuP2ijAGgBiGoB6a-G6gHltgbqAeqm7ECqAf_nrECqAffn7ECqAetvrEC2AcA0gglCIBhEAEyAooCOgyAQIDAgICAoKiAAiBIvf3BOljo3v2L0cSMA_oLAggBgAwB4g0TCK2i_ovRxIwDFchfDwIdF08o_OoNEwjypv-L0cSMAxXIXw8CHRdPKPzQFQGAFwGyFw4YDCoKNzE1MTc0MTExMA%26num%3D1%26sig%3DAOD64_1nKYpLsUHIfIPPPETGsUqlwxSY5g%26client%3Dca-pub-3709565968367875%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_eQ9QERVdcVJQ89BaNEcx%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin';
  urls[3] = 'https://sin.creativecdn.com/imp-delivery?tk=6mpliGU9eN2YdFBr8QOT4eD1A87gZMpelss0cd1AyKqg8SGL_wK8q6I6GkQf9MppVlKHmAf_dMAbjyNIHRdvMrDbhm_AfMl4LSCkQ0arrJNlPDebrMNiAJqUkcqcxNrvFnoUT8lg_J71M91dtAmN95KD4LwNBVkCJYsL0HTtEli5tm5bXv1-ZguYnKlffxm_lEJF2LlsOIIrORT98pLmHsH8FrOqxsylhxE9xmUBaN-Sf9pZuDkCgoCegSFTEroNVboe5nrvYcTfMNMYNKQGHGCHL3tpeLDRUts69Ithd88x-zDRMfimDgaoaLeHF7gMRDLPqgfmfHtaV3-Xbk9Z8ZOPoQ00BsGmHix-9R99s3R-qpQndr68xDbHt0ncuMBXpUAfYqkoL2l4xmdsgJLr8A&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_NzrKnV0RihlsUISpDmMA%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin';
  urls[4] = 'https://sin.creativecdn.com/imp-delivery?tk=CLOvbBbiF8mBpsmfqBa3i-vywLAHy0wJQxIhXeZ6VnSDmU5dwXFAL4l7VGapQxdn5ADYw0HPgh8M0r-A_dzvvwMQQB1RRi3buwxLYg3Ial5pyJaXEIa5Okat1Ms-vQ1-ZTuHijSghZTd6rIhRYH_YK-1gnpyhWTvv07HSGSAXZFk6IUZiejNR2B_4uSFWxBYcSSsJ_q33NXIKLrGu8lBOMrdBjGuRZiY5Aos16Ccxki_4R393Q8DSWq8_tiuSQNBznTIHXuYsuhAL-9fh76nIrSam_BIBmlO-DLcP20UQ0CnG9fBIUotyyeRsmBqb-cguG6oZFmgCG256GH1H2HKMDdgnuQCiLkcHUqY6XEk78UIeApoakq7O3a-5syAjs4X8OPnsZ3HLUSa6GbVT_Eieg&curl=https%3A%2F%2Ftg.socdm.com%2Frd%2Fv1%2Fz%2FhKFj2gDxY2hzbT0yMjQsNGE4MmI2MjcvMjAwNTAzL1NTUExPQy8xNjE2Mjc1LzM0ODQyNi4zNTMxNjQuMTYxNjI3NS8yNDUyMTE4LzIxMTE3MC8yMDA1MDM6U1NQTE9DOiovY3Q9MTc0Mzk4NTQ1MTQ4MTtzcj1odHRwcztkc3BpZD00MTtwcj15TTJIWjUtbHdRO3ByYj15UTtwcm89eVE7cHJvYz1KUFk7Y3JkMnk9MTQ5LjUyMDAwMDAwMDAwMDAxO2NyeTJkPTAuMDA2Njg4MDY4NDg1ODIxMjkzOTtkc3BpZD00MTtmdHlwZT0xO2lkeD0wO6VzZXFpZNoAJDk4M2ZhNWZiLTAzMTYtNjQyMS1lOTdhLTlhNDQ3OGQ0NWZhMKdzZXF0aW1lrTE3NDM5ODU0NTE0ODGkeHVpZLhaMVlSYThDbzhZQUFBRzZRQnc0QUFBQUE%2Fp%2Fctsv%3Da-ad40295%3Bseqid%3D983fa5fb-0316-6421-e97a-9a4478d45fa0%3Bseqctx%3Dgat3by5hZy5mdHlwZaEx%3B%2Fg%2FU%3A%3Furl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_r15DNqAwVgOa5HmkJPZ6%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin';
  urls[5] = 'https://sin.creativecdn.com/imp-delivery?tk=teOvHI6riZh6ZIlDyIQ7MZuTx5sDkuF8b8Zik58IV2xOVqxkzbxVbA8ukgw8lDm4I3gZV3FTkpRhOnyv3PwbiPJBdrkikuLl_RDRvpH3NjXw37gRo_LRjhQDQ4tXp4qEMZIbuK74Xh3e2Z_w8hej1gDeKNZD3cZmYagRl2tDY8IgBqwozm-T7dOMq_l1NfRFVv_FtiXvQcvFxo43vSNbaBRsbO8OAxm8eaTls6OhqjrnFRcaQhUZxYh4KupAGciNjwSx97iuvOfnHNSxIsxZFSMt_0SbW7OxwQtd1M6SshrhYYJdJ5m66-v4_9Xe21v2cOqVQ7RCxRveDqyTZ_BpSiP2CXGGPDDpx9m9TBJzN4D5J53bBFySrzI2rJlqm3zfN-D68xLgVTTQbgqldyPlVA&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_Ty9jht1tHIc0YMG5rKg4%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin';
  urls[6] = 'https://sin.creativecdn.com/imp-delivery?tk=0ieyOL1A2K874i0AL6SM-W11d1klaHH5PIHpSgvlmsKVAOf0wuvCks7PN0s8ag6sR4jvRgcirX5mP50K-YWc1vEzIOSZrW5SjOMRmlqWmNU2orje_tJ8GFPUJzCLG83u5qqL6gxq0hCFsba7n3w_uflLGuJgbbfDX2gFOFzRn6bI962v9iqqoFyxyYjYOoUkrzRFF8M3gQfj59RtUXTqxoW3IDoJGO94iqS4Mv2_N48iZjUF2T9ki6OmAo2zXRQ9n_o3dN4Wp3bX8HoLpr2HwHoopYwUAiiGKe1Ic6wypv4mLD9nq8mOJzldU0dbg_eFpDQJhbHn_GHCs7wxjifrrAhvdtvhybt1lnVpvsAWxOlJl18PuMIui3jMfJ1um50c2ZDLVfuShkVFJ9bFeg4OxhYAax7RBpKsNeftQznXmqTmdlHbzAxpAWyCpOQoY1N8&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_T7A8G1iupuI8VtpsI2tG%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin';
  urls[7] = 'https://sin.creativecdn.com/imp-delivery?tk=7hpuNBYSgcCBRkuWDdZB_mv_J3FsvhRyXodpy7SFFstZv5UjRotRXJvyn0i_9xR3c-eP-mCaOAYD32ACjLRI8TqPiqAGpTW8yPSrgcZ_z0oqdnLQgBOecgypg1djMuSiFSPa7zYBs_aSBtgYiSxooMG_EbyWO_BuIuhgXbkghbOw5QMUI488pIwSuvyeTzt3qkDvxhWFTbPr3Ui8ehq6gA6OlWaN3Lu58uPGJv8BUo3_Zjl4KV-bGnhd8EvP71_gDtDkwiWqpNkD4SDGqha0eDyoSCLKU2L4sO1x7nzyVFzlPeKH9dZnlGf9zIzzaXM6T-DIrGE3rjqIyf5ALGWezmmNICwgSOC8dfSSQBOmv2VAlHmmoJisgVVBke3zMu9xk0U00d2KNhoyzMzNLbrk9P965IBCUGzEdx7xNduOrro&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_sowBvGFzrdx0NUz7YToq%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin';
  urls[8] = 'https://sin.creativecdn.com/imp-delivery?tk=aT0Pf367dsaIR7ZjtQ1ygmpOc89Wxu2jbeC7SDEFUkpyErcnGjjdpAyGEY_iG3ozTViASvsJrpruxJJc2SyBRMEwIAR3cWOocTaPo3N5vKaTx-i-c8f5SCWU9j5O-2it0LHBJJ5O3iYN6b0trG_Mwx2Xr4mvDowCcpyzTNYR2JYXFUyCMYqmXpOt1H-WfCzsLo976t8aY6H1mSs4vo5e4Me7AHuVIw8YsbT9y7kYfv8wfajZe-5k8pQwKqzfSlkmO8VtUuw0eFH_52WrhyZWIYULHd39f-4wweLIEZjeD0FOLEcSGrOVAHsPqH0xPP5eixSCccp0jXERO_653pBy_gbgO00L6mBj9QMY3xEmkgvSppwAaACHs_-5GngeZzmR&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCsS5hKTXzZ9iADeKIid4PnKaikQXA8b7GbfW6gY24DsCNtwEQASAAYInz0YSkFIIBF2NhLXB1Yi0zNzA5NTY1OTY4MzY3ODc1yAEJqQLiqn0APDs9PuACAKgDAcgDAqoEhAJP0JUk_hldT2eX9fpWVSH-2k_XDWq-v_6jdcvLB3o8U6_ezLKXJVEMP2utAdCuYVNuVs4ZyOQSGOtljxclanmqmE51m5050oO18nSVWnlo7o9TV0QB2yc_LdQAViXMWP0ce-43x9nHoZbeB_m4RV1DuTjeYy5uWDf6xNLPsUoWbyEZ27bu0HXBMp_wlz7RDoRMTNff-sszf-F4mWDQVL_npSF76ccOw_P6wVMCVSo-eMpLxXe4s4Q-2QdqxK7p4pMjOWtTh52BCSOmmEtdg07umVFgSCEtMfj0rDB2ICZQS9Z67I4-tYF2CxryuQS39b5VQno-KNDbaQU9_Kcm7h8ix7yPzuAEAYAGqoSS9MK4_aKMAaAGIagHpr4bqAeW2BuoB6qbsQKoB_-esQKoB9-fsQKoB62-sQLYBwDSCCUIgGEQATICigI6DIBAgMCAgICgqIACIEi9_cE6WPzEru_sxIwD-gsCCAGADAHiDRMIzPOu7-zEjAMVYkTCBR0ckyhS6g0TCOuNsO_sxIwDFWJEwgUdHJMoUtAVAYAXAbIXDhgMKgo3MTUxNzQxMTEw%26num%3D1%26sig%3DAOD64_2NchQ2Z4pPguN5MqeOTP1KHFqYLA%26client%3Dca-pub-3709565968367875%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_2JrAbFv5EVG5Ew3rek06%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin';
  urls[9] = 'https://sin.creativecdn.com/imp-delivery?tk=_8t5ZWXWHtJTnxrxgi6kH0MQRTQUa0BSGydiRSUvz6Es8kd-7RQeAHZTiRGWm8le_ZTQ_jvp2pSr34aoj0HztvEvm_7O4DMws3NiYEDd-y-NvJeIChApB3uFDHr_ByH2RXR8_L6qq5TXQm7eRpLHbTei1bjVIbVFqeVRgsPaDpnXFrQtpWVRhWIiDqEi63BvqRF-frFyv1lzW8KpxNXMnbs9wf35T5S-fP5UI6kG-hpqxfnboIwHmHZjjvgneP6z9o5iHhGrs9Ccf-MC1-te-kjgHfMQAs9nX4EQtmjR0snQ8n0SiMdt2GV_22MuzFro2np0bag2Oj-uIiva7GnL9fYtbbAdrqJSXHyiSH6b6Hl8Y3NUeby39G8jgeiys_s1exTBfzTqAQ5ScTjtPM0BFEb1ewc3XgQ0HVU3YD7XQNt3Mktro5h7JyX6aRwmv0lX&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DC1Uo27zXzZ8WxGeqO29gPmMjDqAzA8b7GbfW6gY24DsCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi04OTg5NjQ1OTE1MzEyOTIzyAEJqQLiqn0APDs9PuACAKgDAcgDAqoE1gJP0KDHN7Z72_ng7nlUdIxJ8RH9hM64JvFPodZxNa_DBbMDxsbpZvCRAfNojY7iIASX2yRC27Ec7z_FdUO-tsE7Xru2k3Iexl4UYoUOsOm3c3yAYQT04xGL6_6jEWVfD8Tag4ujBwvCEt51HRdh7h4mJcJN08wnYS8_PLp23olOS_jRy2V-BegsSRd5dYbn2y2-F1e2BpBYPnZlMifSqBRIwLFV_2hPCtFaBvLVVtAbcdgPp9WvLqPjcoKBPd1FdpsiUwig_5iwYDaX0suOi3u7RW3_N5lv0yPTzjC1R0pbcEyu64SYMOg-9VlyUphyNCKceMW3gE0A68I7X_hvLq6LPL49YQB6Cs319WwxbrVskYROhk4sk693vZW9UljPask-ldy5AjBSTjBB71W6_sOJz2xbA7nlSUoDdArgG23bvAieo5y98PpDoszLI_NsmAV46pC1jnrgBAGABqqEkvTCuP2ijAGgBiGoB6a-G6gHltgbqAeqm7ECqAf_nrECqAffn7ECqAetvrEC2AcA0gglCIBhEAEyAooCOgyAQIDAgICAoKiAAiBIvf3BOljtvO_N7cSMA_oLAggBgAwB4g0TCMf7783txIwDFWrHFgUdGOQQxeoNEwj1svHN7cSMAxVqxxYFHRjkEMXQFQGAFwGyFw4YDCoKOTE1NTUxOTMwMw%26num%3D1%26sig%3DAOD64_05aEJMRw7TDhutW8aTM_0K8NH-8A%26client%3Dca-pub-8989645915312923%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_zm3RTP39CYxwFas3gnQe%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin';
  urls[10] = 'https://sin.creativecdn.com/imp-delivery?tk=IN9Eo7HpjJddbsvlAeIPG3gCwVg3WX3HZPZOj2OTKIIsMC8E3AAYwClw-Uk8wiFipjhYRyMzvoAsJxOggF5Z5IxYZ3QZCsxMBxOKe7CQdzrdZRT8UKO7eorOmrU0WYrxKKlv3iVgtRC5s0KszZg9tSKwkWMd70UtJCwZZkqvsiUXYfENfDvV1WQy4vTE3k2_h7oCwsEn8-kIXEIuV00ee5Rdgh-HqwiwyaCFhzSOT3RgUClSqoirtAPmSoA-rwomBvI8SaWh1nBjM4dFY6CWz_wR00fJ1rIU7QXnh8xY_9MPwe2gLTEd56frHjGJn50FD-7NkFAv1W5g7IIMVwdYs4JmbCuMGxhjfA_YZKxJXtMpg4N6-Y3g-5k8yAGGW3vmE92P4ZD0wxHR4Pk6zpsRyyRZzyUQYzMi7-H2tTSMSnu1Q_oqMgKx9X0YuCX2WEuM&curl=https://adclick.g.doubleclick.net/aclk%3Fsa%3DL%26ai%3DCgEV07zXzZ8SxGeqO29gPmMjDqAzA8b7GbfW6gY24DsCNtwEQASAAYImj0oSoFIIBF2NhLXB1Yi04OTg5NjQ1OTE1MzEyOTIzyAEJqQLiqn0APDs9PuACAKgDAcgDAqoE1QJP0NKQW2IgIP_qpAc0nA-bHze-Issf1WnR4IeZlINNT5ELLTtYOzw6FhY67V_MaudUAAWGvFQkYoTY1IdFYe9T-shnsyrtfFKXYlcuQ86tXxXNvHfE_6xUhp1mMSWtP2B4f3fFjR_Tc4L0wiVvYmG1hMvWlI1P-NYT9pncWy7EXgUHehIIlvtmqYdLLSS-KfeY-n3iEpQzxYysTdbmblHgRuHFqSekBs0MNgS4J691-yY3I7nKcvScFMaKekVbSFWRra2JPru9k9TjXk5McxtRu522GKtlPW-S12MYALxDAmq6qjeeslf3RltAOEKlRMzEp8AMvCeQqVbtx3sXRRu6BXsXtxhgVFOR2zy5e9CIiRv2wU2mgrYNUasmdpUJE2E40PVvxylbQHoGOoBTGQ5w-3zDYQJjid1mLk2KRzrkxtnyd0vQPvyjL4h1i4neqbXIzjhjjuAEAYAGqoSS9MK4_aKMAaAGIagHpr4bqAeW2BuoB6qbsQKoB_-esQKoB9-fsQKoB62-sQLYBwDSCCUIgGEQATICigI6DIBAgMCAgICgqIACIEi9_cE6WO28783txIwD-gsCCAGADAHiDRMIxvvvze3EjAMVascWBR0Y5BDF6g0TCPSy8c3txIwDFWrHFgUdGOQQxdAVAYAXAbIXDhgMKgo5NzYyNjI2NjA1%26num%3D1%26sig%3DAOD64_2mfNYfIoG80KHUaLqUXRLPTdi7qg%26client%3Dca-pub-8989645915312923%26adurl%3Dhttps%253A%252F%252Fsin.creativecdn.com%252Fclicks%253Fid%253D20250407_bACP9xyrvR0GwITPhZJQ%2526%257BEXTRA_CLICK_PARAMS%257D&tdc=sin';
  urls[11] = 'https://sakitibi.github.io/12nin.com/SuperNewRoles-Logo';
  urls[12] = 'https://sin.creativecdn.com/imp-delivery?tk=LwV6JWP43eyiMJSyGvEQC2uiPk-eeOi3La9ohtXgonsgUYwRatF9h-0-OnhKm0oG-lO9oFuISn2gDxefgZMwxUX-Y5foJK1zRxzCHdUWGGY2y062QCDnTJ-Kotp4n5db-r9NhKvJZMKjQTH3m4eGGrlZE6qR1Y2VVm9Jzc1ruWZKmm3gj6yaK1grVFeCvESy0r1As8EAnASiHOK80yMeHEQH380JxfRdsisMRbUwDA4oMXYYLTpcbs0VNcT-rWaBcYaABPJ55lzd0BiyqKjZKBFdNuV8mQ4dqCTQjbxvT934QRN2mkhDrJT5U7UdR4OZGPMgxRtYGdCPHvxVeLTaJtVrRuogG__Dll_eA9yggjZqHmOCwlMrJSzcR3A4dv5F7v4jEwTMYshC5Tn-7JGt3_1WxZjs3xHflYfii6abkeRXYqD0vyjMvYDUDOmGWOOX&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250407_fWirbCEfJLLVSwwJpJFR%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin';
  urls[13] = 'https://sin.creativecdn.com/imp-delivery?tk=RbMNTOLWkSeLO-25oZ5wufrA7ynldsBzv1yF74QOFzOO1DaRwGgpJHY4Sg_vVQDuwasd5UoVS-Cu8LFYud97HBAPjejDgk3KKsssUqRehqWCf60Ghgr6aOUDycbzdb-S4PtXc3vlwEH_coYL5KPfyWAjPcM0uhZZKKd59sGkoM3i6k3CFRJ_MPiDRi7ne8dfXI1H6rAwvNKZG0A-Q4JpNHCe5fPyX5BREDityKuy9M17WXo7kfXTlz1Z6JsNbWSzF8ysJbwWv11aJS-ZZVo7-RZi3-Kx10s6LIkrizyIBXEE-DNPlyHAuurZvzleArm4bJ-CKzKgKrUIxHgCAlAE8NZCvEat3hocC9njCnjsJn8lrM6xoDuK3v8FgpFSWK4h&curl=https%3A%2F%2Fsin.creativecdn.com%2Fclicks%3Fid%3D20250408_DZtDfusmU1JJAatutR9j%26%7BEXTRA_CLICK_PARAMS%7D&tdc=sin';
　ifm.src = urls[r];
  //一番上に移動
  location.href = '#';
}
